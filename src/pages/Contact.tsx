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

  const { toast } = useToast();

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

    // Prepare WhatsApp message with emojis and clear website indication
    const whatsappNumber = "919510174496"; // +91 95101 74496

    const whatsappMessage = `🌐 *WEBSITE CONTACT FORM ENQUIRY* 🌐
━━━━━━━━━━━━━━━━━━━━━

👤 *Name:* ${formData.name}

📧 *Email:* ${formData.email}

${formData.subject ? `📝 *Subject:* ${formData.subject}\n\n` : ''}💬 *Message:*
${formData.message}

━━━━━━━━━━━━━━━━━━━━━
🔗 Sent from: JK Steel Website Contact Form`;

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);

    // Create WhatsApp URL
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Open WhatsApp in new tab
    window.open(whatsappURL, '_blank');

    // Show success message
    toast({
      title: "Redirecting to WhatsApp...",
      description: "Your message is ready to send!"
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
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Unified Background - Same as About Page */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-900/95 via-purple-900/30 to-blue-900/40 -z-10" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-400/15 via-transparent to-transparent -z-10" />

      {/* Hero Section - Minimalistic */}
      <section className="pt-32 pb-12 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4 text-white">
              Get in <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className="text-base text-slate-400 leading-relaxed max-w-2xl mx-auto">
              Have questions about our products? We'd love to hear from you!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content - Compact Layout */}
      <section className="pb-16 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* Contact Form */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-xl flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <h2 className="text-xl font-playfair font-bold text-white">Send us a Message</h2>
                  <p className="text-sm text-slate-400">We'll respond within 24 hours</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-white">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your name"
                      className="bg-white/5 border-white/10 text-white placeholder:text-slate-500 focus:border-purple-400"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-white">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email"
                      className="bg-white/5 border-white/10 text-white placeholder:text-slate-500 focus:border-purple-400"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2 text-white">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What's this about?"
                    className="bg-white/5 border-white/10 text-white placeholder:text-slate-500 focus:border-purple-400"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-white">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us how we can help you..."
                    rows={5}
                    className="bg-white/5 border-white/10 text-white placeholder:text-slate-500 focus:border-purple-400 resize-none"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>

                <p className="text-xs text-slate-400 text-center">
                  By submitting this form, you agree to our privacy policy.
                </p>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">

              {/* Contact Details Card */}
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl">
                <h3 className="text-xl font-playfair font-bold mb-4 text-white">Contact Information</h3>
                <div className="space-y-4">

                  {/* Email */}
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white text-sm mb-1">Email Us</h4>
                      <a href="mailto:jaykhodiyarkrupa@gmail.com" className="text-slate-300 hover:text-purple-400 transition-colors text-sm">
                        jaykhodiyarkrupa@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white text-sm mb-1">Call Us</h4>
                      <a href="tel:+916353786749" className="text-slate-300 hover:text-blue-400 transition-colors text-sm">
                        +91 6353786749
                      </a>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500/20 to-blue-600/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white text-sm mb-1">Visit Us</h4>
                      <address className="text-slate-300 not-italic text-sm leading-relaxed">
                        Jay Khodiyar Krupa<br />
                        Plot no 2, Jay sardar industrial area,<br />
                        near kothariya railway station<br />
                        Rajkot - 360002
                      </address>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Hours Card */}
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-xl flex items-center justify-center">
                    <Clock className="w-5 h-5 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-playfair font-bold text-white">Business Hours</h3>
                </div>
                <div className="space-y-2.5">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-white text-sm">Monday - Friday</span>
                    <span className="text-slate-300 text-sm">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-white text-sm">Saturday</span>
                    <span className="text-slate-300 text-sm">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-white text-sm">Sunday</span>
                    <span className="text-slate-300 text-sm">Closed</span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-white/5 rounded-xl">
                  <p className="text-xs text-slate-400">
                    <strong className="text-white">Note:</strong> We respond to all emails within 24 hours during business days.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;
