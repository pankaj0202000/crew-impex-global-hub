import { useState } from "react";
import { Mail, Phone, MapPin, Globe, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/layout/Layout";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    product: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Inquiry Submitted!",
      description: "Thank you for your inquiry. Our team will get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", company: "", phone: "", product: "", message: "" });
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "info@crewimpex.com" },
    { icon: Phone, label: "Phone", value: "+91 9915815334 / +91 8755406105 / +91 98999 23754" },
    { icon: MapPin, label: "Address", value: "Wave City, Ghaziabad, Uttar Pradesh, India 201010" },
    { icon: Globe, label: "Website", value: "www.crewimpex.com" },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <p className="text-secondary font-medium tracking-widest uppercase mb-4">Contact Us</p>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-6">
              Let's Start a <span className="text-secondary">Conversation</span>
            </h1>
            <p className="text-primary-foreground/80 text-lg leading-relaxed">
              Have questions about our products or services? Ready to place an order? Our team is here to help you with all your export needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-display font-bold text-foreground mb-6">Get In Touch</h2>
              <p className="text-muted-foreground mb-8">
                We're always ready to hear from you. Reach out through any of the channels below or fill out the inquiry form.
              </p>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                      <item.icon size={20} className="text-secondary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      <p className="text-foreground font-medium">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 p-6 bg-muted rounded-lg">
                <h3 className="font-display font-semibold text-foreground mb-3">Business Hours</h3>
                <p className="text-muted-foreground text-sm">Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p className="text-muted-foreground text-sm">Saturday: 10:00 AM - 4:00 PM</p>
                <p className="text-muted-foreground text-sm">Sunday: Closed</p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-card border border-border rounded-lg p-8">
                <h2 className="text-2xl font-display font-bold text-foreground mb-6">Send Us an Inquiry</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Full Name *</label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Email Address *</label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Company Name</label>
                      <Input
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your company"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Phone Number</label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Product Interest</label>
                    <select
                      name="product"
                      value={formData.product}
                      onChange={handleChange}
                      className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm"
                    >
                      <option value="">Select a product category</option>
                      <option value="formals">Formals</option>
                      <option value="casuals">Casuals</option>
                      <option value="boots">Boots</option>
                      <option value="sports">Sports</option>
                      <option value="sneakers">Sneakers</option>
                      <option value="multiple">Multiple Categories</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Your Message *</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your requirements, order quantity, and any specific needs..."
                      rows={5}
                      required
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 gap-2">
                    <Send size={18} /> Submit Inquiry
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Contact Us */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Quick Response", description: "Get a reply within 24 hours" },
              { title: "Expert Guidance", description: "Our team helps you choose the right products" },
              { title: "Competitive Pricing", description: "Best rates for bulk orders" },
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <CheckCircle size={24} className="text-secondary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-display font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;