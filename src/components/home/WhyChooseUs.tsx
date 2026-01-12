import { Shield, Clock, Globe, Users, CheckCircle, Truck } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "Every product is carefully checked to meet international standards.",
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    description: "Optimized logistics ensure minimal transit time.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Serving businesses in over 50 countries worldwide.",
  },
  {
    icon: Users,
    title: "Client-Centric",
    description: "Customized solutions that cater to each client's unique needs.",
  },
  {
    icon: CheckCircle,
    title: "Proven Track Record",
    description: "Years of successful exports and satisfied clients globally.",
  },
  {
    icon: Truck,
    title: "Seamless Logistics",
    description: "End-to-end supply chain management for stress-free trade.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-primary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-secondary font-medium tracking-widest uppercase mb-4">
            Why To Choose Us
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-4">
            Your Success is{" "}
            <span className="text-secondary">Our Priority</span>
          </h2>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto">
            Choosing a partner for exports is a critical decision. Crew Impex offers reliability, quality, efficiency, and expertise in global trade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-lg p-8 hover:bg-primary-foreground/10 transition-colors"
            >
              <div className="w-14 h-14 rounded-full bg-secondary/20 flex items-center justify-center mb-6">
                <feature.icon size={28} className="text-secondary" />
              </div>
              <h3 className="text-xl font-display font-semibold text-primary-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-primary-foreground/70 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;