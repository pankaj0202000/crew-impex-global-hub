import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-foreground mb-4">
          Ready to Partner with Crew Impex?
        </h2>
        <p className="text-secondary-foreground/80 max-w-2xl mx-auto mb-8">
          Whether you're a small business looking for a dependable supplier or a large enterprise seeking a reliable export partner, we're here to deliver excellence.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/contact">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
              Contact Us <ArrowRight size={18} />
            </Button>
          </Link>
          <Link to="/products">
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
              Browse Products
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;