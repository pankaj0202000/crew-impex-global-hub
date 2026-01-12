import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const AboutPreview = () => {
  const highlights = [
    "Quality First – Rigorous checks at every step",
    "Efficiency – Streamlined processes for quick delivery",
    "Integrity – Transparent and ethical practices",
    "Client-Centric – Customized solutions for your needs",
  ];

  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-secondary font-medium tracking-widest uppercase mb-4">
              About Us
            </p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              Building Trust Through{" "}
              <span className="text-secondary">Consistent Action</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Founded on the principles of integrity, professionalism, and dedication, 
              Crew Impex has grown into a reliable export company recognized for delivering 
              high-quality products with minimal transit time.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our journey began with a simple vision—to create an export business that 
              does not just transact but transforms the way businesses experience trade.
            </p>
            
            <div className="space-y-3 mb-8">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-secondary flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>

            <Link to="/about">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
                Learn More <ArrowRight size={18} />
              </Button>
            </Link>
          </div>

          <div className="relative">
            <div className="bg-primary rounded-lg p-12 text-center">
              <p className="text-6xl md:text-8xl font-display font-bold text-secondary mb-4">
                10+
              </p>
              <p className="text-primary-foreground text-xl">Years of Excellence</p>
              <div className="mt-8 grid grid-cols-2 gap-6">
                <div>
                  <p className="text-3xl font-bold text-primary-foreground">500+</p>
                  <p className="text-primary-foreground/60 text-sm">Happy Clients</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary-foreground">50+</p>
                  <p className="text-primary-foreground/60 text-sm">Countries</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-secondary rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;