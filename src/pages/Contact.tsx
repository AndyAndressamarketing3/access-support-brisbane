
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from "@/hooks/use-toast";

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

const Contact = () => {
  return (
    <div>
      {/* Hero Section */}
      <ContactHero />
      
      {/* Contact Form & Information */}
      <ContactSection />
      
      {/* Map */}
      <MapSection />
    </div>
  );
};

const ContactHero = () => {
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
              Get In Touch
            </motion.span>
            
            <motion.h1
              variants={fadeIn} 
              className="text-4xl md:text-5xl font-bold mt-4 mb-6"
            >
              Contact Us
            </motion.h1>
            
            <motion.p 
              variants={fadeIn}
              className="text-gray-600 text-lg"
            >
              We're here to answer your questions and discuss how we can support you or your loved one. Reach out to us today.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const { toast } = useToast();
  
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real implementation, this would send the form data to a server
    toast({
      title: "Message Sent",
      description: "Thank you for your message. We'll get back to you as soon as possible.",
    });
    // Reset form
    e.currentTarget.reset();
  };
  
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={staggerChildren}
          >
            <motion.h2 variants={fadeIn} className="text-3xl font-bold mb-6">
              Send Us a Message
            </motion.h2>
            <motion.p variants={fadeIn} className="text-gray-600 mb-8">
              Fill out the form below, and one of our team members will get back to you as soon as possible.
            </motion.p>
            
            <motion.form variants={fadeIn} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Your Name</Label>
                  <Input id="name" placeholder="Enter your name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Your Email</Label>
                  <Input id="email" type="email" placeholder="Enter your email" required />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" placeholder="Enter your phone number" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="What is this regarding?" required />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Your Message</Label>
                <Textarea id="message" placeholder="Enter your message here" rows={5} required />
              </div>
              
              <Button type="submit" className="btn-primary w-full md:w-auto">
                Send Message
              </Button>
            </motion.form>
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
          >
            <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
            <p className="text-gray-600 mb-8">
              You can also reach us directly using the contact information below or visit our office during business hours.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-primary-light/10 p-3 rounded-full mr-4">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Our Location</h3>
                  <p className="text-gray-600">Brisbane, QLD, Australia</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary-light/10 p-3 rounded-full mr-4">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Phone</h3>
                  <p className="text-gray-600">+61 7 3000 0000</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary-light/10 p-3 rounded-full mr-4">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Email</h3>
                  <p className="text-gray-600">info@kindaccess.com.au</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary-light/10 p-3 rounded-full mr-4">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Office Hours</h3>
                  <p className="text-gray-600">Monday - Friday: 9:00 AM - 5:00 PM</p>
                  <p className="text-gray-600">Saturday & Sunday: Closed</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const MapSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container-custom">
        <h2 className="text-3xl font-bold mb-8 text-center">Find Us</h2>
        <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d226357.84291469398!2d152.89920678291973!3d-27.471095449175753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b91579aac93d233%3A0x402a35af3deaf40!2sBrisbane%20QLD%2C%20Australia!5e0!3m2!1sen!2sus!4v1653025376520!5m2!1sen!2sus" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Kind Access Location"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
