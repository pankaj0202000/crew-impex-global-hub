import { Link } from "react-router-dom";
import { ArrowRight, Globe, Shield, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-primary/70" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <p className="text-secondary font-medium tracking-widest uppercase mb-4 animate-fade-in">
            Global Moves, Seamless Reach
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display text-primary-foreground font-bold leading-tight mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Your Trusted Partner in
            <span className="text-secondary block">Global Exports</span>
          </h1>
          <p className="text-primary-foreground/80 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Delivering high-quality products worldwide with efficiency, reliability, and unmatched speed. Experience a new standard in international trade.
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Link to="/products">
              <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 gap-2">
                Explore Products <ArrowRight size={18} />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                Get a Quote
              </Button>
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          {[
            { icon: Globe, label: "Countries Served", value: "50+" },
            { icon: Shield, label: "Quality Assured", value: "100%" },
            { icon: Clock, label: "On-Time Delivery", value: "98%" },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-lg p-6 flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                <stat.icon size={24} className="text-secondary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-primary-foreground">{stat.value}</p>
                <p className="text-primary-foreground/60 text-sm">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;