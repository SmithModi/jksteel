import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const {
    toast
  } = useToast();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic form validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours."
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  return <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="hero-gradient py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-playfair font-bold mb-6">
              Get in <span className="text-gradient-primary">Touch</span>
            </h1>
            <p className="text-xl leading-relaxed text-slate-200">
              Have a question about our products? Need help with your order? Or simply want to share your 
              culinary story? We'd love to hear from you!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="glass-card p-8 rounded-2xl">
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-12 h-12 glass-card rounded-full flex items-center justify-center border border-white/30">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-playfair font-bold text-white">Send us a Message</h2>
                  <p className="text-slate-300">We'll respond within 24 hours</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-white">
                      Full Name *
                    </label>
                    <Input id="name" name="name" value={formData.name} onChange={handleInputChange} placeholder="Enter your full name" className="glass-card" required />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-white">
                      Email Address *
                    </label>
                    <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} placeholder="Enter your email" className="glass-card" required />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2 text-white">
                    Subject
                  </label>
                  <Input id="subject" name="subject" value={formData.subject} onChange={handleInputChange} placeholder="What's this about?" className="glass-card" />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-white">
                    Message *
                  </label>
                  <Textarea id="message" name="message" value={formData.message} onChange={handleInputChange} placeholder="Tell us how we can help you..." rows={6} className="glass-card resize-none" required />
                </div>

                <Button type="submit" size="lg" className="w-full glass-button">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>

                <p className="text-sm text-slate-300 text-center">
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <div className="glass-card p-8 rounded-2xl">
                <h3 className="text-2xl font-playfair font-bold mb-6 text-white">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 glass-card rounded-full flex items-center justify-center flex-shrink-0 border border-white/30">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Email Us</h4>
                      
                      <a href="mailto:jaykhodiyarkrupa@gmail.com" className="text-white hover:underline">
                        jaykhodiyarkrupa@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 glass-card rounded-full flex items-center justify-center flex-shrink-0 border border-white/30">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Call Us</h4>
                      
                      <a href="tel:+916353786749" className="text-white hover:underline">
                        +91 6353786749
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 glass-card rounded-full flex items-center justify-center flex-shrink-0 border border-white/30">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Visit Us</h4>
                      
                      <address className="text-white not-italic">
                        Jay Khodiyar Krupa<br />
                        Plot no 2, Jay sardar industrial area,<br />
                        near kothariya railway station<br />
                        Rajkot - 360002
                      </address>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="glass-card p-8 rounded-2xl">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 glass-card rounded-full flex items-center justify-center border border-white/30">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-playfair font-bold text-white">Business Hours</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-white">Monday - Friday</span>
                    <span className="text-white">9:00 AM - 6:00 PM EST</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-white">Saturday</span>
                    <span className="text-white">10:00 AM - 4:00 PM EST</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-white">Sunday</span>
                    <span className="text-white">Closed</span>
                  </div>
                </div>
                <div className="mt-6 p-4 glass-card rounded-lg">
                  <p className="text-sm text-white">
                    <strong>Note:</strong> Our customer service team aims to respond to all emails within 24 hours during business days.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

    </div>;
};
export default Contact;
