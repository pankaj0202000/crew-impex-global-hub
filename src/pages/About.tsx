import Layout from "@/components/layout/Layout";
import { CheckCircle, Target, Eye, Award, Users, Lightbulb, Leaf, Star, Quote } from "lucide-react";

const About = () => {
  const values = [
    { icon: Award, title: "Quality First", description: "We never compromise on the quality of the products we deliver." },
    { icon: CheckCircle, title: "Efficiency", description: "Our streamlined processes ensure products reach their destination quickly." },
    { icon: Users, title: "Integrity", description: "Honesty and transparency guide every interaction at Crew Impex." },
    { icon: Target, title: "Client-Centric", description: "Our clients are at the center of everything we do." },
    { icon: Lightbulb, title: "Innovation", description: "We embrace technology to streamline operations and enhance efficiency." },
    { icon: Leaf, title: "Sustainability", description: "Committed to sustainable sourcing and ethical business practices." },
  ];

  const clientReviews = [
    {
      name: "John Mitchell",
      company: "European Footwear Ltd.",
      location: "London, UK",
      rating: 5,
      review: "Crew Impex has been our trusted partner for over 3 years. Their commitment to quality and timely delivery is unmatched. Every shipment arrives exactly as promised.",
    },
    {
      name: "Sarah Thompson",
      company: "Global Retail Solutions",
      location: "New York, USA",
      rating: 5,
      review: "Working with Crew Impex has transformed our supply chain. Their attention to detail and proactive communication make international trade seamless.",
    },
    {
      name: "Ahmed Hassan",
      company: "Middle East Trading Co.",
      location: "Dubai, UAE",
      rating: 5,
      review: "The quality of footwear from Crew Impex exceeds expectations every time. Their team understands our market needs and delivers consistently.",
    },
    {
      name: "Maria Garcia",
      company: "Calzado Imports",
      location: "Madrid, Spain",
      rating: 5,
      review: "Reliable, professional, and always on time. Crew Impex has become an indispensable partner for our European distribution network.",
    },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <p className="text-secondary font-medium tracking-widest uppercase mb-4">About Us</p>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-6">
              Building Trust Through <span className="text-secondary">Consistent Action</span>
            </h1>
            <p className="text-primary-foreground/80 text-lg leading-relaxed">
              In the ever-evolving landscape of global trade, one thing remains constant: the need for trust, quality, and efficiency. At Crew Impex, we understand these needs deeply.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-display font-bold text-foreground mb-6">Our Story</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Founded on the principles of integrity, professionalism, and dedication, Crew Impex has grown into a reliable export company recognized for delivering high-quality products with minimal transit time.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our journey began with a simple vision—to create an export business that does not just transact but transforms the way businesses experience trade. Over the years, we have stayed true to that vision, building a company where actions speak louder than words.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Every client interaction is an opportunity to showcase our commitment to excellence. We believe in earning trust through consistent action, exceeding expectations, and providing solutions that make international trade seamless and reliable.
              </p>
            </div>
            <div className="bg-muted rounded-lg p-12">
              <div className="grid grid-cols-2 gap-8 text-center">
                <div>
                  <p className="text-5xl font-display font-bold text-secondary">10+</p>
                  <p className="text-muted-foreground mt-2">Years Experience</p>
                </div>
                <div>
                  <p className="text-5xl font-display font-bold text-secondary">50+</p>
                  <p className="text-muted-foreground mt-2">Countries Served</p>
                </div>
                <div>
                  <p className="text-5xl font-display font-bold text-secondary">500+</p>
                  <p className="text-muted-foreground mt-2">Happy Clients</p>
                </div>
                <div>
                  <p className="text-5xl font-display font-bold text-secondary">98%</p>
                  <p className="text-muted-foreground mt-2">On-Time Delivery</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-card border border-border rounded-lg p-10">
              <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mb-6">
                <Target size={32} className="text-secondary" />
              </div>
              <h3 className="text-2xl font-display font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To deliver top-quality products to our clients around the world with efficiency, reliability, and speed. We make it our priority to ensure that every product meets stringent quality standards and reaches its destination in the shortest possible time.
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-10">
              <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mb-6">
                <Eye size={32} className="text-secondary" />
              </div>
              <h3 className="text-2xl font-display font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be recognized as a global leader in exports, not only for the quality of our products but also for the reliability of our services and the strength of our client relationships. We aim to set industry benchmarks in speed, quality, and customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Reviews */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-secondary font-medium tracking-widest uppercase mb-4">Client Reviews</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              What Our Clients Say
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {clientReviews.map((review, index) => (
              <div key={index} className="bg-card border border-border rounded-lg p-8 relative">
                <Quote size={40} className="text-secondary/20 absolute top-6 right-6" />
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={18} className="text-secondary fill-secondary" />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6 italic">
                  "{review.review}"
                </p>
                <div>
                  <p className="font-display font-semibold text-foreground">{review.name}</p>
                  <p className="text-sm text-muted-foreground">{review.company}</p>
                  <p className="text-sm text-secondary">{review.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-primary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-secondary font-medium tracking-widest uppercase mb-4">Our Values</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground">
              What Drives Us Forward
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-lg p-8">
                <value.icon size={32} className="text-secondary mb-4" />
                <h3 className="text-xl font-display font-semibold text-primary-foreground mb-3">{value.title}</h3>
                <p className="text-primary-foreground/70">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;