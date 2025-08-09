import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MapPin, Clock, Phone, Mail, Instagram, Facebook, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. We'll get back to you soon.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-stone-900/30" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h3 className="text-4xl md:text-5xl font-bold mb-6">
            Visit <span className="gradient-text">Brew Haven</span>
          </h3>
          <p className="text-xl text-stone-400 max-w-3xl mx-auto">
            Ready to experience exceptional coffee? Find us in the heart of downtown or get in touch
            to learn more.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="bg-stone-900/70 glass-effect rounded-xl p-8">
              <h4 className="text-2xl font-bold mb-6 text-stone-100">Location & Hours</h4>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="text-amber-400 h-6 w-6 mt-1" />
                  <div>
                    <h5 className="font-semibold text-stone-100 mb-1">Address</h5>
                    <p className="text-stone-400">
                      123 Coffee Street
                      <br />
                      Downtown District, City 12345
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="text-amber-400 h-6 w-6 mt-1" />
                  <div>
                    <h5 className="font-semibold text-stone-100 mb-1">Hours</h5>
                    <div className="text-stone-400 space-y-1">
                      <p>Monday - Friday: 6:00 AM - 10:00 PM</p>
                      <p>Saturday: 7:00 AM - 11:00 PM</p>
                      <p>Sunday: 7:00 AM - 9:00 PM</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="text-amber-400 h-6 w-6 mt-1" />
                  <div>
                    <h5 className="font-semibold text-stone-100 mb-1">Contact</h5>
                    <p className="text-stone-400">Phone: (555) 123-4567</p>
                    <p className="text-stone-400">Email: hello@brewhaven.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-stone-900/70 glass-effect rounded-xl p-8">
              <h4 className="text-2xl font-bold mb-6 text-stone-100">Follow Us</h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-amber-400 hover:text-amber-300 transition-colors duration-200"
                >
                  <Instagram className="h-8 w-8" />
                </a>
                <a
                  href="#"
                  className="text-amber-400 hover:text-amber-300 transition-colors duration-200"
                >
                  <Facebook className="h-8 w-8" />
                </a>
                <a
                  href="#"
                  className="text-amber-400 hover:text-amber-300 transition-colors duration-200"
                >
                  <Twitter className="h-8 w-8" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-stone-900/70 glass-effect rounded-xl p-8"
          >
            <h4 className="text-2xl font-bold mb-6 text-stone-100">Get In Touch</h4>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-stone-300 mb-2">
                  Name *
                </label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  placeholder="Your full name"
                  className="bg-stone-800/50 border-stone-700 text-stone-100 placeholder-stone-400 focus:ring-amber-400/60"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-stone-300 mb-2">
                  Email *
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder="your.email@example.com"
                  className="bg-stone-800/50 border-stone-700 text-stone-100 placeholder-stone-400 focus:ring-amber-400/60"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-stone-300 mb-2">
                  Subject
                </label>
                <Select value={formData.subject} onValueChange={(value) => handleInputChange("subject", value)}>
                  <SelectTrigger className="bg-stone-800/50 border-stone-700 text-stone-100">
                    <SelectValue placeholder="Choose a topic" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="general">General Inquiry</SelectItem>
                    <SelectItem value="catering">Catering Services</SelectItem>
                    <SelectItem value="events">Private Events</SelectItem>
                    <SelectItem value="wholesale">Wholesale Orders</SelectItem>
                    <SelectItem value="feedback">Feedback</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-stone-300 mb-2">
                  Message *
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  placeholder="Tell us how we can help you..."
                  rows={5}
                  className="bg-stone-800/50 border-stone-700 text-stone-100 placeholder-stone-400 focus:ring-amber-400/60 resize-vertical"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-amber-400 text-stone-950 px-6 py-3 rounded-lg font-semibold hover:bg-amber-300 transition-colors duration-200 transform hover:scale-105"
              >
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
